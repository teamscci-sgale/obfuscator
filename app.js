const yargs = require('yargs');

yargs.command({
    command: 'encode',
    describe: 'Return obfuscated snippet',
    builder: {
        input: {
            describe: 'String to be obfuscated',
            demandOption: true,
            type: 'string'
        },
    },
    handler({ input }) {
        hide(input);
    }
})

const hide = (input) => {
    const unencoded = Buffer.from(input);
    const encoded = unencoded.toString('hex');
    console.log('\nUnencoded: ' + input);
    console.log('Encoded:   ' + encoded);
    console.log('\nSnippet:   const decoded = (Buffer.from(\'' + encoded + '\', \'hex\')).toString();\n');
}
yargs.parse();