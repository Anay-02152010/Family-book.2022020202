var images=
["https://lh3.googleusercontent.com/proxy/ms5FTgTCi--0jHcm3_meUZnL8vn5tGffGe8VmHaEIR_e1d6IjpACjhJ8t4veM91JQsHN-sNn9j9u8qxMdLek5A6T",
"https://cdn1.vectorstock.com/i/1000x1000/40/80/cartoon-father-carrying-a-son-in-his-arms-vector-25114080.jpg",
"https://www.edupics.com/image-brother-dl20979.jpg",
"https://www.pinclipart.com/picdir/middle/35-353068_mother-with-short-brown-hair-clip-art-at.png"];

var names=["Ayan Saran", "Saran Sabarinath", "Anay Saran", "Sandhya Pendyala"];

var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array=4
    if(i > numbers_of_family_member_in_array)
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("familyimg").src = updatedImage;
    document.getElementById("familyname").src = updatedImage;
}
