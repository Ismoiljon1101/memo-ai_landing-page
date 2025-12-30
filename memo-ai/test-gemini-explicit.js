
const https = require('https');

const apiKey = process.argv[2];
if (!apiKey) {
    console.error('Usage: node test-gemini-explicit.js <API_KEY>');
    process.exit(1);
}

const model = 'gemini-2.0-flash';
console.log(`🔍 Testing ${model} with provided key...`);

const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

const data = JSON.stringify({
    contents: [{
        parts: [{ text: "Reply with 'Success!'" }]
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
            console.log('\nResult:');
            console.log(text || 'No text in response');
        } catch (e) {
            console.error('Failed to parse:', e);
        }
    });
});

req.on('error', (err) => {
    console.error('Network error:', err.message);
});

req.write(data);
req.end();
