// this is the main folder. 
import java.util.*; 
import java.io.PrintStream;
import java.nio.charset.StandardCharsets;

public class index {

   public index() {
   }
   public static void main(String[] var0) {
      
      Scanner sc = new Scanner(System.in);
      // start your code from here. 

      // Ensure stdout uses UTF-8 so Marathi/Devanagari text prints correctly.
      // Note: also make sure this source file is saved as UTF-8 in your editor.
      try {
         System.setOut(new PrintStream(System.out, true, StandardCharsets.UTF_8.name()));
      } catch (Exception e) {
         // If this fails, continue with default encoding
      }

      // string=name of the crop. // arr[0] = Max rate/quintal, arr[1]=max yeild/hectare 
      HashMap<String, int []> crops = new HashMap<>(); 
      crops.put("ऊस", new int[]{355, 1800});         // Sugarcane
      crops.put("मका", new int[]{2700, 55});          // Maize
      crops.put("गहू", new int[]{3200, 45});          // Wheat
      crops.put("कापूस", new int[]{7710, 18});       // Cotton
      crops.put("भूईमूग", new int[]{5550, 25});       // Groundnut
      crops.put("करडई", new int[]{8600, 18});        // Safflower
      crops.put("वांगी", new int[]{5100, 300});       // Brinjal/Eggplant
      crops.put("मूग पिवळा", new int[]{12500, 10});   // Yellow Moong
      crops.put("मूग हिरवा", new int[]{9000, 12});    // Green Moong
      crops.put("उडीद", new int[]{7455, 12});         // Black Gram
      crops.put("तूर", new int[]{7250, 20});          // Toor/Pigeon Pea
      crops.put("हरभरा", new int[]{6500, 20});        // Chickpea
      crops.put("सोयाबीन", new int[]{4800, 32});      // Soybean
      crops.put("ज्वारी", new int[]{3800, 40});        // Sorghum
      crops.put("कांदा", new int[]{1550, 120});       // Onion
      crops.put("मिरची", new int[]{5000, 150});       // Chilli
      crops.put("हळद", new int[]{13025, 0}); 

      // for (HashMap.Entry<String, int[]> entry : crops.entrySet()) {
      //       System.out.println(entry.getKey() + " => " + Arrays.toString(entry.getValue()));
      //   }


   // Use a text block for a clean multiline menu (Java 15+)
   System.out.print("""
   Pik Niwada:
   1
   1. ऊस
   2
   2. मका
   3
   3. गहू
   4
   4. कापूस
   5
   5. भूईमूग
   6
   6. करडई
   7
   7. वांगी
   8
   8. मूग पिवळा
   9
   9. मूग हिरवा
   10
   10. उडीद
   11
   11. तूर
   12
   12. हरभरा
   13
   13. सोयाबीन
   14
   14. ज्वारी
   15
   15. कांदा
   16
   16. मिरची
   17
   17. हळद
   """);

      int selectedCrop = sc.nextInt(); 

      switch(selectedCrop){
         case 1: 
      }




      
   }
}
