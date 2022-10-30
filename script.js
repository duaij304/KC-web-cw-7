
function BMI(weight,height){
    let result= weight / (height * height);
    return result;
}

console.log(BMI(80,1.63))

function Status(Bodymass)
{
    if(Bodymass<18)
    {
      return "لديك نقص في الوزن"
    }
    else if(Bodymass<25&&Bodymass>18.5)
    {
       return "وزنك صحي"
    }
     else if(Bodymass>25)
     {
       return "لديك زيادة في الوزن" 
       
     }
}
function Calculate()
{
    let weight = document.getElementById("weight").value
     let height = document.getElementById("height").value
      let bmi_value= BMI(weight,height);
        let desc = Status(bmi_value);
          let box =document.getElementById("result");
            box.innerText=bmi_value+"=="+desc;
}

