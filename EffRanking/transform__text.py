
#Used to convert txt file of just values into one ready to paste into js file


# input.txt is expected to be like
#ID,3bv,clicks          on each line

MODE = 1
PLAYER_ID = 2150671

# These values are added 

input_file = "input.txt"
output_file = "output.txt"

output_lines = []

with open(input_file, "r") as f:
    for line in f:
        parts = line.strip().split(',')
        if len(parts) != 3:
            continue
        id_val, val1, val2 = parts

        formatted = f"    [{id_val}, {MODE}, {PLAYER_ID}, {val1}, {val2}],"
        output_lines.append(formatted)

with open(output_file, "w") as f:
    for line in output_lines:
        f.write(line + "\n")

print("Done. Written to", output_file)
