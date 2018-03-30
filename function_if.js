function batting(player,distance)
{
    if(distance <= 350 && distance > 0)
        {
            document.write(player + " Hit the ball");
        }
    else if(distance <= 0)
        {
            document.write(player + " Struck out");
        }
    else
        {
            document.write(player + " Hit a home run");
        }
}

batting("Steve",0);