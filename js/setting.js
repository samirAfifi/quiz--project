import {Quiz} from "./Quiz.js"
export class Setting{
    constructor(){
        this.categoryElement=document.getElementById("seletor");
        this.difficulteElement= document.getElementsByName("choces");
        this.NumberQuestions=document.querySelector('#numberQuestion');
        

        this.btnStart =document.querySelector(".btn-header");
        this.btnStart.addEventListener("click" , this.startQuiz.bind(this));



    }
    async startQuiz(){
        // console.log("heloooooo")
        let category=this.categoryElement.value;
        let NumOfQues=this.NumberQuestions.value;
        let difficulte= ([...this.difficulteElement].filter(el=>el.checked)[0].value);

        let Api= `https://opentdb.com/api.php?amount=${NumOfQues}&category=${category}&difficulty=${difficulte}`

        let response= await this.getApI(Api);
        if(response.length>0){
            $("#setting").fadeOut(500, ()=>{
                $("#Quiz").fadeIn(500);
            })
             let quiz =new Quiz(response);
        }
       
    }

    async getApI(Api){
        let allData = await fetch(Api);
        let request = await allData.json();
        return request.results  ;
        
    }
}
