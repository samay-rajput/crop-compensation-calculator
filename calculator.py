import sys
import io

# Set the standard output stream (stdout) to use UTF-8 encoding.
# This explicitly forces the script to correctly print non-ASCII characters 
# like Marathi (Devanagari) to the console, overriding potential terminal defaults.
# try:
#     sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
# except Exception as e:
#     # Fallback to default in case of error, though this should rarely fail
#     # when printing to the console directly.
#     pass

def calculate_revenue():
    # string=name of the crop. 
    # value[0] = Max rate/quintal (कमाल भाव प्रति क्विंटल)
    # value[1] = Max yield/hectare (प्रति हेक्टरी उत्पादन क्विंटल)
    crops = {
    "uss": [355, 1800],
    "maka": [2700, 55],
    "gahu": [3200, 45],
    "kapus": [7710, 18],
    "bhuimug": [5550, 25],
    "karadai": [8600, 18],
    "vangi": [5100, 300],
    "moog_pivla": [12500, 10],
    "moog_hirva": [9000, 12],
    "udid": [7455, 12],
    "tur": [7250, 20],
    "harbhara": [6500, 20],
    "soyabean": [4800, 32],
    "jwari": [3800, 40],
    "kanda": [1550, 120],
    "mirchi": [5000, 150],
    "halad": [13025, 0]
}
    
    print("You need to find (oeperation): \n1. Crop Loss in rs.\n2. Area undergone in loss.")
    operation = int(input())

    # List of crop names used for indexed menu selection
    crop_names = list(crops.keys())



    print("Please Select the crop: ")
    for i, name in enumerate(crop_names):
        print(f"{i + 1}. {name}")
    # Read the 1-indexed selection from the user directly
    try:
        selected_crop_index = int(input())
    except ValueError:
        print("Invalid input for crop selection. Please enter a number.")
        return


    # Check for valid selection range (1 to list length)
    if not (1 <= selected_crop_index <= len(crop_names)):
        print("Invalid crop number selected.")
        return
    # Get the actual crop name using 0-indexed lookup
    selected_crop_name = crop_names[selected_crop_index - 1]
    
    # Retrieve the rate and yield values
    rate = crops[selected_crop_name][0]
    yield_per_hectare = crops[selected_crop_name][1]

    if (operation==1):
        print("Please enter area in (sqq.m): ")
        # Read the area (presumably in hectares)
        try:
            area = float(input())
            area = area/10000
        except ValueError:
            print("Invalid input for area. Please enter a number.")
            return
        # Calculate total revenue (Rate * Yield * Area)
        total_revenue = rate * yield_per_hectare * area

        print(f"The loss amount is: Rs {total_revenue}")

    elif(operation==2):
        print("enter the cost of land undergone loss: ")
        try: 
            cost=int(input())
        except: 
            print("Invalid input for cost. Please enter a number")
        total_area = (cost/(yield_per_hectare*rate))*10000

        print(f"The area undergone loss is: {total_area} sq.meter")

    else:
        print("please select a proper operation.")
    

if __name__ == "__main__":
    calculate_revenue()
