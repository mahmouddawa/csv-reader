export const dateStringToDates = (dateString: string) : Date =>{
  //28/10/2018
  const dataParts = dateString
  .split('/')
  .map((value: string)=>{
    return parseInt(value);
  })


return new Date(dataParts[2], dataParts[1]-1, dataParts[0]);
} 