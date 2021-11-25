import argparse
import pandas as pd


def add_type(file_name, new_name):
    data = pd.read_csv(file_name)
    file_path = data.iloc[:, -1]
    extension = file_path.map(lambda x: str(x).split(".")[-1].lower())
    data.insert(4, "類型", extension)
    data.to_csv(new_name, index=None)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--file_name", type=str, required=True,
        help="Old file name"
    )
    parser.add_argument(
        "--new_name", type=str, required=True,
        help="New file name"
    )
    args = parser.parse_args()

    add_type(args.file_name, args.new_name)
