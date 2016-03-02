var samples = [34, 18, 26, 44, 95]; //length is 5 but index value is 4

var total = 0; //we are seeking the sum of those values
var i;
for(i=0; i < samples.length; i++) {//same as i=i+1.....we are running a conditional loop
  total += samples[i]; //same as total = total+samples ....this will run 5 times before hitting the console

}
console.log(total)



var samples = [34, 18, 26, 44, 95];

var total = 0;
var i;
for(i=0; i < samples.length; i++) {
  total += samples[i];
  console.log(i, samples[i], total);
}
console.log(total);
