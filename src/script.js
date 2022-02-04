function myfunction() {
    let l = document.getElementById("length").value;
    var w = document.getElementById("width").value;
    document.getElementById("area").innerHTML =
      "Area is " + l * w + " sq. mtr.";
    document.getElementById("para").innerHTML =
      "Parimeter is " + 2 * (l + w) + " sq. mtr.";
  }