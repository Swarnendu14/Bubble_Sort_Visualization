let arr=[50,40,1,10,60,5]
let visual=document.getElementsByClassName('visual');
let logic=document.getElementsByClassName('logic');
let btn=document.getElementsByClassName('start');
document.getElementById('action').style.color="white";
document.getElementById('result').style.fontSize="4rem";
//create new divs according to array size
arr.forEach((x,i)=>{
    let innerDiv=document.createElement("div");
    innerDiv.style.height="4rem";
    innerDiv.style.width="4rem";
    innerDiv.style.textAlign="center";
    innerDiv.style.padding="0.9rem";
    innerDiv.style.backgroundColor="white";
    innerDiv.style.borderRadius="10px";
    innerDiv.setAttribute('id','elem'+i);
    innerDiv.classList.add("innerDiv");
    visual[0].appendChild(innerDiv);
    document.getElementById('elem'+i).innerHTML=arr[i];
});

btn[0].addEventListener("click",()=>fun(arr));

const sleep=(time)=>{
    return new Promise(resolve=>setTimeout(resolve,time))
}

async function fun(arr){
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length-i-1;j++)
        {
            await sleep(500);
            //receive the 2 operational values to the "num" class
            document.getElementById('num1').innerHTML=arr[j];
            document.getElementById('num2').innerHTML=arr[j+1];
            if(arr[j]>arr[j+1])
            {
                //swap array elements
                swap(arr,j);
                //used to swap two innerDiv's values
                swapDiv(j);
            }
            else{
                //if condition false then change result to false & action to no swap
                document.getElementById('result').innerHTML="FALSE";
                document.getElementById('result').style.color="red";

                document.getElementById('action').innerHTML="NO SWAP";
                document.getElementById('action').style.fontSize="4rem";
                
                //condition false to give red indigator for 2 elements
                document.getElementById('elem'+j).style.backgroundColor="red";
                document.getElementById('elem'+(j+1)).style.backgroundColor="red"; 
            }
            await sleep(1800);
            //back to normal state
            document.getElementById('elem'+j).style.backgroundColor="white";
            
            document.getElementById('elem'+(j+1)).style.backgroundColor="white";
            
        }
        // every i th itteration array will sorted from the right side so I assign different color for sorted elements. 
        document.getElementById('elem'+(arr.length-i-1)).style.backgroundColor="orange";
        document.getElementById('elem'+(arr.length-i-1)).style.borderRadius="10px";
    }
    //Final o/p array is sorted now
    document.getElementById("para").innerHTML="ARRAY IS SORTED NOW --- To see this again Please Refresh the Web Page";
    document.getElementById("para").style.color="white";
    document.getElementById("para").style.fontSize="1.8rem";
    document.getElementById("para").style.background="black";
    document.getElementById("para").style.height="5rem";
    document.getElementById("para").style.paddingTop="2rem";
}


function swap(arr,j)
{
    let temp=arr[j];
    arr[j]=arr[j+1];
    arr[j+1]=temp;
}


function swapDiv(j)
{
let a='elem'+j;
let b='elem'+(j+1);
let div1= document.getElementById(a);
//changing the innerDiv color for some time if condition true
div1.style.backgroundColor="green";

let div2= document.getElementById(b);
div2.style.backgroundColor="green";

//swap the div containts
let num1=div1.innerHTML;
let num2=div2.innerHTML;
div1.innerHTML=num2;
div2.innerHTML=num1;

//if condition true then logic -> result (true)
document.getElementById('result').innerHTML="TRUE";
document.getElementById('result').style.color="green";

//logic -> action (swap or not)
document.getElementById('action').innerHTML="SWAP &nbsp &nbsp"+num1+" &#8652; "+num2;
document.getElementById('action').style.fontSize="4rem";
}