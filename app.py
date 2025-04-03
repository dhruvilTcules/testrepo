import os

# Set the base directory (change this if needed)
BASE_DIR = "public/components"

def rename_images():
    for component in os.listdir(BASE_DIR):
        component_path = os.path.join(BASE_DIR, component)

        if not os.path.isdir(component_path):
            continue  # Skip if not a directory

        for variant in os.listdir(component_path):
            variant_path = os.path.join(component_path, variant)

            if not os.path.isdir(variant_path):
                continue  # Skip if not a directory

            image_files = [f for f in os.listdir(variant_path) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.svg'))]
            image_files.sort()  # Sort to maintain order

            for index, filename in enumerate(image_files, start=1):
                new_name = f"image{index}.png"  # All files will have .png extension
                old_path = os.path.join(variant_path, filename)
                new_path = os.path.join(variant_path, new_name)

                try:
                    os.rename(old_path, new_path)
                    print(f"Renamed: {old_path} → {new_path}")
                except Exception as e:
                    print(f"Error renaming {old_path}: {e}")

if __name__ == "__main__":
    rename_images()
