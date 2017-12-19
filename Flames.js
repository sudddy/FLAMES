<script>


var a='inputone';
var b='inputtwo';
var c='FLAMES';
var flames=c.split("");
var aArray=a.split("");
var bArray=b.split("");
var length= aArray.length + bArray.length;


if(a.length > b.length)
{
	compareA(aArray,bArray,length);
}
else
{
	compareA(bArray,aArray,length);
}


function compareA(a,b,c)
{
	let alen=a.length;
        let blen=b.length;
	for(i=0; i< alen; i++)
	{
		for(j=0; j< blen ; j++)
		{
			if(a[i]===b[j])
			{
				b.splice(j,1);
				length-=2;
               		         break;
			}	
				
		}

	}
  
	 result(length,flames);
}


function result(n,flames)
{	

	let j=0;
	temp=n;
        let arrSize=flames.length;
	for(i=0; i < 5;  i++)
	{
		n=temp;
		while(n>0)
		{
		if(j===arrSize)
        {
        	j=0;
        }
			if(n==1)
			{
				
				flames.splice(j,1);
				arrSize=flames.length;
				break;
			}
			j++;
			n--;
		}
	}
	console.log(flames);
}



</script>
