from pathlib import Path
from PIL import Image

jobs = [
    (Path('/tmp/safety-hero-source.jpg'), Path('assets/images/safety-driving-hero.webp')),
    (Path('/tmp/rules-hero-source.jpg'), Path('assets/images/rules-driving-hero.webp')),
]

for source, destination in jobs:
    image = Image.open(source).convert('RGB')
    image.thumbnail((960, 640), Image.Resampling.LANCZOS)
    image.save(destination, 'WEBP', quality=65, method=6)
    print(f'{destination}: {image.width}x{image.height}')
