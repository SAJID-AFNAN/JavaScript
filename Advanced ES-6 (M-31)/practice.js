// task -1 console.log sofia secondary school location 
const data = {
    sofia: {
        id: 33,
        study: [
            {
                primary: [
                    { school_name: 'ABC Primary school' },
                    { location: 'Peters burg' }
                ]
            },
            {
                secondary: [
                    { school_name: "ABC Primary school" },
                    { location: 'Peters burg' }
                ]
            }
        ]
    }
}
const sofia = data.sofia.study[1].secondary[1].location
console.log(sofia)
