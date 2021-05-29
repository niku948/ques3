var arr =[1,2,3,3,4,5,6,7,8,9,10];

for(var j = 0; j<arr.length; j++){
    if(arr[j]==arr[j+1])
        document.writeln("Repeated number: "+arr[j]);
}