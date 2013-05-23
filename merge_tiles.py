#!/usr/bin/env python

import glob

import Image

TILE_SIZE = 256

IMAGE_CACHE_DIR = '.tiles'

DEPTH = 5 

def main():
    grid_size = 2 ** DEPTH 
    canvas_size = grid_size * TILE_SIZE

    print grid_size
    print canvas_size

    canvas = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))

    for image_path in glob.iglob(IMAGE_CACHE_DIR + '/???/??????.png'):
        nums = image_path[-(DEPTH + 5):-4]

        x = 0
        y = 0

        for i, coord in enumerate([int(n) for n in nums]):
            if coord == 1 or coord == 3:
                x += (2 ** (DEPTH - i)) * TILE_SIZE

            if coord == 2 or coord == 3:
                y += (2 ** (DEPTH - i)) * TILE_SIZE

        print nums, x, y

        tile = Image.open(image_path)

        canvas.paste(tile, (x, y))

    canvas.save('test.png')
    canvas.show()


if __name__ == '__main__':
    main()
