import pandas as pd
import requests

base_url = "<base_url>"
csv_file = pd.read_csv("<csv_file>")

for idx in range(len(csv_file)):
    total_url = f"{base_url}/{csv_file.iloc[idx, 6]}"
    req = requests.get(total_url)
    if req.status_code != requests.codes.ok:
        print(idx + 2)
