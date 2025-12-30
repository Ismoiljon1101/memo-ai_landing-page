
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

console.log('🔍 Testing Gemini API with provided key...');

const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        if (res.statusCode !== 200) {
            console.error(`❌ API Error: ${res.statusCode}`);
            console.error(data);
            return;
        }

        try {
            const json = JSON.parse(data);
            console.log('\n✅ Available Models:');
            if (json.models) {
                json.models.forEach(model => {
                    const isGemini = model.name.includes('gemini');
                    if (isGemini) {
                        console.log(`- ${model.name.replace('models/', '')}`);
                        console.log(`  Supported methods: ${model.supportedGenerationMethods.join(', ')}`);
                    }
                });
            } else {
                console.log('No models found in response.');
            }
        } catch (e) {
            console.error('Failed to parse response:', e);
        }
    });

}).on('error', (err) => {
    console.error('Network error:', err.message);
});
