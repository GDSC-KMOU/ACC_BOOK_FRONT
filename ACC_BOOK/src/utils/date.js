export default function dateGet(returnType = 0) {
  const today = new Date();
      
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  if(returnType === 0) {
    return `${year}-${month}-${day}`;
  } else {
    return `${year}-${month}`;
  }
}