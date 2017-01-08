
  function check_all(obj,cName) 
  { 
      var checkboxs = document.getElementsByName(cName); 
      for(var i=0;i<checkboxs.length;i++){checkboxs[i].checked = obj.checked;} 
  } 

var a = 0,
  b = 0,
  c = 0, 
  d = 0, 
  e = 0, 
  f = 0, 
  g = 0, 
  h = 0, 
  i = 0, 
  j = 0, 
  k = 0, 
  l = 0, 
  sum = 0;

var res ="";
var btn = document.getElementById("ok");
btn.onclick = function() {

  localStorage.clear();
  var obj = document.getElementsByName("disaster");
  var selected = [];
  if (obj[0].checked) {
    a += 0.0556;
    b += 0.0139;
    c += 0.0833;
    d += 0;
    e += 0.1806;
    f += 0.0972;
    g += 0.1667;
    h += 0.0833;
    i += 0.0694;
    j += 0.0417;
    k += 0.0972;
    l += 0.1111;
    sum += 1;
    res = res.concat("殺人案&nbsp&nbsp");
  }

  if (obj[1].checked) {
    a += 0;
    b += 0.0238;
    c += 0.1429;
    d += 0.0714;
    e += 0.2619;
    f += 0.0952;
    g += 0.2143;
    h += 0.0238;
    i += 0;
    j += 0.0476;
    k += 0.0476;
    l += 0.0714;
    sum += 1;
    res = res.concat("強盜案&nbsp&nbsp");
  }

  if (obj[2].checked) {
    a += 0.1864;
    b += 0.0847;
    c += 0.0677;
    d += 0.0338;
    e += 0.1016;
    f += 0.0338;
    g += 0.1186;
    h += 0.0238;
    i += 0.0508;
    j += 0.0677;
    k += 0.1186;
    l += 0.0338;
    sum += 1;
    res = res.concat("強制性交&nbsp&nbsp");

  }

  if (obj[3].checked) {
    a += 0.056;
    b += 0.056; 
    c += 0.071;
    d += 0.255;
    e += 0.048;
    f += 0.082;
    g += 0.166;
    h += 0.062;
    i += 0.039;
    j += 0.046;
    k += 0.068;
    l += 0.05;
    sum += 1;
    res = res.concat("毒品案&nbsp&nbsp");
  }

  if (obj[4].checked) {   
    a +=  0.069;
    b +=  0.081;
    c +=  0.078;
    d +=  0.095;
    e +=  0.106;
    f +=  0.103;
    g +=  0.090;
    h +=  0.060;
    i +=  0.112;
    j +=  0.052;
    k +=  0.060;
    l +=  0.094;
    sum += 1; 
    res = res.concat("竊盜案&nbsp&nbsp");
  }

  if (obj[5].checked) {
    a += 0.06;
    b += 0.1; 
    c += 0.08;
    d += 0.09;
    e += 0.13;
    f += 0.06;
    g += 0.06;
    h += 0.1;
    i += 0.04;
    j += 0.08;
    k += 0.08;
    l += 0.11;
    sum += 1;
    res = res.concat("交通事故&nbsp&nbsp");
  }

  if (obj[6].checked) {
    a += 0.06;
    b += 0.1; 
    c += 0.11;
    d += 0.06;
    e += 0.1291;
    f += 0.06;
    g += 0.11;
    h += 0.08;
    i += 0.04;
    j += 0.07;
    k += 0.1066;
    l += 0.06;
    sum += 1;
    res = res.concat("傳染病&nbsp&nbsp");
  }

  if (obj[7].checked) {   
    a +=  0;
    b +=  0.063;
    c +=  0.046;
    d +=  0.189;
    e +=  0.541;
    f +=  0.111;
    g +=  0;
    h +=  0;
    i +=  0;
    j +=  0.050;
    k +=  0;
    l +=  0;
    sum += 1;
    res = res.concat("婦幼被害案&nbsp&nbsp");
  }

//alert(res);

  a = a / sum;
  b = b / sum;
  c = c / sum;
  d = d / sum;
  e = e / sum;
  f = f / sum;
  g = g / sum;
  h = h / sum;
  i = i / sum;
  j = j / sum;
  k = k / sum;
  l = l / sum;

  var mean = (a+b+c+d+e+f+g+h+i+j+k+l) / 12;
  localStorage.setItem("mean", mean);
  localStorage.setItem("factor", res);


  var JSONsettings = [{
    district: "松山區",
    id: a
  }, {
    district: "信義區",
    id: b
  }, {
    district: "大安區",
    id: c
  }, {
    district: "中正區",
    id: d
  }, {
    district: "中山區",
    id: e
  }, {
    district: "大同區",
    id: f
  }, {
    district: "萬華區",
    id: g
  }, {
    district: "文山區",
    id: h
  }, {
    district: "南港區",
    id: i
  }, {
    district: "內湖區",
    id: j
  }, {
    district: "士林區",
    id: k
  }, {
    district: "北投區",
    id: l
  }];
  localStorage.setItem("fdsettings", JSON.stringify(JSONsettings));
  var myjson = JSON.parse(localStorage.getItem("fdsettings"));
  
  alert("You should enable \" load unsafe script \" to show the d3image.");

  // var value1 = window.localStorage.getItem("fdsettings");
  // alert(value1);
};