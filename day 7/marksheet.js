let marks =[
    {
        "name": "Alice",
        "marks":{
            "maths": 56,
            "english" : 78,
            "science" : 92
        }
    },
     {
        "name": "Alice", 
        "marks": {
            "maths": 56,
            "english": 78,
            "science": 92
        }
    },
     {
        "name": "Alice",
        "marks": {
            "maths": 56,
            "english": 78,
            "science": 92
        }
    }
]

marks.map((m)=>{
    console.log("---------------------------------------------------------")
    console.log(m.name, "\t \n\tMaths: ", m.marks.maths,  "\t\n\tEnglish: ", m.marks.english,  "\t\n\tScience: ", m.marks.science)
    
})
console.log("---------------------------------------------------------")