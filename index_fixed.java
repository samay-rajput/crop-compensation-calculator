// corrected version of index.java
import java.util.*;
import java.io.PrintStream;
import java.nio.charset.StandardCharsets;

public class index_fixed {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Ensure stdout uses UTF-8 so Devanagari prints correctly
        try {
            System.setOut(new PrintStream(System.out, true, StandardCharsets.UTF_8.name()));
        } catch (Exception e) {
            // ignore
        }

        HashMap<String, int[]> crops = new HashMap<>();
        crops.put("ऊस", new int[]{355, 1800});
        crops.put("मका", new int[]{2700, 55});
        crops.put("गहू", new int[]{3200, 45});
        crops.put("कापूस", new int[]{7710, 18});
        crops.put("भूईमूग", new int[]{5550, 25});
        crops.put("करडई", new int[]{8600, 18});
        crops.put("वांगी", new int[]{5100, 300});
        crops.put("मूग पिवळा", new int[]{12500, 10});
        crops.put("मूग हिरवा", new int[]{9000, 12});
        crops.put("उडीद", new int[]{7455, 12});
        crops.put("तूर", new int[]{7250, 20});
        crops.put("हरभरा", new int[]{6500, 20});
        crops.put("सोयाबीन", new int[]{4800, 32});
        crops.put("ज्वारी", new int[]{3800, 40});
        crops.put("कांदा", new int[]{1550, 120});
        crops.put("मिरची", new int[]{5000, 150});
        crops.put("हळद", new int[]{13025, 0});

        String[] cropNames = {
            "ऊस",
            "मका",
            "गहू",
            "कापूस",
            "भूईमूग",
            "करडई",
            "वांगी",
            "मूग पिवळा",
            "मूग हिरवा",
            "उडीद",
            "तूर",
            "हरभरा",
            "सोयाबीन",
            "ज्वारी",
            "कांदा",
            "मिरची",
            "हळद"
        };

        System.out.println("Pik Nivada:");
        for (int i = 0; i < cropNames.length; i++) {
            System.out.println((i + 1) + ". " + cropNames[i]);
        }

        System.out.print("Select crop number: ");
        int selectedCrop = sc.nextInt();

        System.out.print("Area taka: ");
        int area = sc.nextInt();

        if (selectedCrop < 1 || selectedCrop > cropNames.length) {
            System.out.println("Invalid crop selection.");
        } else {
            String sel = cropNames[selectedCrop - 1];
            int[] info = crops.get(sel);
            if (info == null) {
                System.out.println("No data for selected crop: " + sel);
            } else {
                int rate = info[0];
                int yieldPerHa = info[1];
                long estimate = (long) rate * area; // simple estimate
                System.out.println("Selected: " + sel);
                System.out.println("Rate per unit: " + rate + ", Yield/ha: " + yieldPerHa);
                System.out.println("Estimated value for area " + area + " = " + estimate);
            }
        }

        sc.close();
    }
}
