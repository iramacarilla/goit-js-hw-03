const findBestEmployee = function(employees) {
  const keys = Object.keys(employees);
  let maxValue = 0;
  let best = "";
  for (key of keys)
  {
    if (employees[key] > maxValue) {
      maxValue =employees[key]; 
     best = key;
    } }
  return best;
  };
  
  // Объекты и ожидаемый результат
  const developers = {
    
  };
  console.log(findBestEmployee(developers)); 
  // 'lorence'
  
  const supports = {
    poly: 45,
    mango: 17,
    ajax: 141,
  }; 
  console.log(findBestEmployee(supports)); 
  // 'mango'
  
  const sellers = {
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }
  //console.log(findBestEmployee(sellers)); 
    