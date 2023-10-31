export class Quiz{
    constructor(response){
        this.response =response;
        this.NumOfQues=response.length;
        this.nextBtn=document.querySelector(".btn-submit");
        this.nextBtn.addEventListener("click" ,this.nextQuestion.bind(this) )

        this.currentQuestion =0;
        this.score =0;
       this.showElement();
    }
    showElement(){
        document.getElementById("question").innerHTML = this.response[this.currentQuestion].question;
        document.getElementById("currentQuestion").innerHTML= this.currentQuestion+1;
        document.getElementById("realQuestion").innerHTML= this. NumOfQues;
        let answer =[this.response[this.currentQuestion].correct_answer , ...this.response[this.currentQuestion].incorrect_answers ]
        console.log(answer)
        function shuffle(array) {
            let currentIndex = array.length,  randomIndex;
          
            // While there remain elements to shuffle.
            while (currentIndex != 0) {
              // Pick a remaining element.
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
              // And swap it with the current element.
              [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
            return array;
          }
          shuffle(answer);
          let html="";
          for( let i=0 ; i<answer.length ; i++){
            html+=`
            <div class="form-check">
                <label class="form-check-label">
                    <input type="radio" class=" form-check-input py-2" name="answer" id="" value="${answer[i]}">
                    ${answer[i]}
                </label>
            </div>`
          }
          document.getElementById("rowAnswer").innerHTML=html;
         
          console.log(answer)
        
        
    }
    nextQuestion(){
        let userChocesAnswer =document.getElementsByName("answer");
        if([...userChocesAnswer].filter(el => el.checked).length==1){
            $("#alert").fadeOut(500);
        this.checkAsnwer();
        this.currentQuestion++;
        if(this.currentQuestion < this.NumOfQues){
          this.showElement();
        }else{
            $("#Quiz").fadeOut(500 , ()=>{
                $("#fininsh").fadeIn(500);
                document.getElementById("score").innerHTML=this.score;
                document.querySelector(".btn-fininsh").addEventListener("click" , ()=>{
                   $("#fininsh").fadeOut(500 , ()=>{
                       $("#setting").fadeIn(500)
                   })
                })
   
            })
        }
       
       }else{
             $("#alert").fadeIn(500);
            
             
       }
       
    }
    checkAsnwer(){
        let userChocesAnswer =document.getElementsByName("answer");

            let userAuswer =[...userChocesAnswer].filter(el => el.checked)[0].value;
            if(userAuswer==[this.response[this.currentQuestion].correct_answer]){
                this.score++;
                $("#Correct").fadeIn(300 , function(){
                    $("#Correct").fadeOut(300)
                })
            
            }else{
                $("#inCorrect").fadeIn(300 , function(){
                    $("#inCorrect").fadeOut(300)
            
            })}
          
    }
}



