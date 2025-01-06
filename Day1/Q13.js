let scr = [30, 39, 90, 95, 85, 55, 60, 70, 72, 75];
let count = 0;
for(let i = 0; i<scr.length; i++){
  if(scr[i]<40){
    scr[i] = scr[i] + 20;
  }
  if(scr[i]>90){
    scr[i]=90;
  } 
  if(scr[i]>=50){
  count++;
  }
}
console.log(count);
console.log(scr);