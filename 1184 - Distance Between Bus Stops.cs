using System;

public class Solution
{
    public int DistanceBetweenBusStops(int[] distance, int start, int destination)
    {
        int pa = 0, pb = 0;
        
        int a = Math.Min(start, destination);
        int b = Math.Max(start, destination);
        for (int i = a; i < b; i++)
        {
            pa += distance[i];
        }

        for (int i = b; i != a; i = (i + 1) % distance.Length)
        {
            pb += distance[i];
        }

        return Math.Min(pa, pb);
    }
}