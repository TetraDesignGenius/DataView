var field1=[];
var field2=[];

d3.csv("data.csv",function(csv){
            csv.map(function(d){
                field1.push(d.name);
                field2.push(+d.value);
            })
            console.log("field1",field1);
console.log("field2",field2);
console.log("field1",field1[0]);
        });
