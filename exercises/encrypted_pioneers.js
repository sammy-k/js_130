function encryptRot13(name) {
  function rot13(str) {
    return str.replace(/[A-Za-z]/g, (char) => {
      const start = char <= "Z" ? 65 : 97;
      return String.fromCharCode(((char.charCodeAt(0) - start + 13) % 26) + start);
    });
  }

  return rot13(name);
}


console.log(encryptRot13('Nqn Ybirynpr'));
console.log(encryptRot13('Tenpr Ubccre'));
console.log(encryptRot13('Nqryr Tbyqfgvar'));
console.log(encryptRot13('Nyna Ghevat'));
console.log(encryptRot13('Puneyrf Onoontr'));
console.log(encryptRot13('Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv'));
console.log(encryptRot13('Wbua Ngnanfbss'));
console.log(encryptRot13('Ybvf Unvog'));
console.log(encryptRot13('Pynhqr Funaaba'));
console.log(encryptRot13('Fgrir Wbof'));
console.log(encryptRot13('Ovyy Tngrf'));
console.log(encryptRot13('Gvz Orearef-Yrr'));
console.log(encryptRot13('Fgrir Jbmavnx'));
console.log(encryptRot13('Xbaenq Mhfr'));
console.log(encryptRot13('Fve Nagbal Ubner'));
console.log(encryptRot13('Zneiva Zvafxl'));
console.log(encryptRot13('Lhxvuveb Zngfhzbgb'));
console.log(encryptRot13('Unllvz Fybavzfxv'));
console.log(encryptRot13('Tregehqr Oynapu'));