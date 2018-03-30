var orc =
{
    hair:"green",
    age:26,
    stomachFull: false,
    eat:function()
    {
        document.write("Nom,nom");
    }
};
 
if (orc.stomachFull == true)
{
    orc.eat();
}
else
    {
        document.write("orc is not eating");
    }