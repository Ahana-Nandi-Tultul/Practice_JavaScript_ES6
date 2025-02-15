let arr = [19, 18, 17, 15, 16, 12, 11, 14, 13, 2, 1, 10, 7, 4, 3, 5, 6, 8, 20, 9]
for(let i = 0; i < (arr.length-1); i++)
{
    for(let j = i+1; j < arr.length; j++)
    {
        if(arr[i] > arr[j])
        {
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
}

console.log(arr)