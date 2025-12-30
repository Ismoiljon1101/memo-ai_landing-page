
const fs = require('fs');
const path = require('path');
const https = require('https');

// Load environment variables manually
const envPath = path.join(process.cwd(), '.env');
let apiKey = '';

if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    const match = content.match(/MEMO_GEMINI_API_KEY=(.+)/);
    if (match) {
        apiKey = match[1].trim();
    }
}

if (!apiKey) {
    console.error('❌ Could not find MEMO_GEMINI_API_KEY in .env');
    process.exit(1);
}

const model = 'gemini-2.0-flash';
console.log(`mic Testing generation with model: ${model}...`);

const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

const data = JSON.stringify({
    contents: [{
        parts: [{ text: "Say 'Gemini 2.0 is working!'" }]
    }]
});

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = https.request(url, options, (res) => {
    let responseBody = '';

    res.on('data', (chunk) => {
        responseBody += chunk;
    });

    res.on('end', () => {
        if (res.statusCode !== 200) {
            console.error(`❌ API Error: ${res.statusCode}`);
            console.error(responseBody);
            return;
        }

        try {
            const json = JSON.parse(responseBody);
            const text = json.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text) {
                console.log('\n✅ Success! Response:');
                console.log(text);
            } else {
                console.log('❌ No text in response.');
                console.log(JSON.stringify(json, null, 2));
            }
        } catch (e) {
            console.error('Failed to parse response:', e);
        }
    });
});

req.on('error', (err) => {
    console.error('Network error:', err.message);
});

req.write(data);
req.end();
