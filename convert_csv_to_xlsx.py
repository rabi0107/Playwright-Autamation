import csv
import subprocess
import sys
from pathlib import Path

CSV_PATH = Path(r"d:\Playright_demo\w3schools_java_test_cases.csv")
XLSX_PATH = Path(r"d:\Playright_demo\w3schools_java_test_cases.xlsx")

try:
    from openpyxl import Workbook
except Exception:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "openpyxl"])
    from openpyxl import Workbook


def convert(csv_path: Path, xlsx_path: Path):
    wb = Workbook()
    ws = wb.active
    with csv_path.open(newline='', encoding='utf-8') as f:
        reader = csv.reader(f)
        for row in reader:
            ws.append(row)
    wb.save(str(xlsx_path))


if __name__ == '__main__':
    if not CSV_PATH.exists():
        print(f"CSV not found: {CSV_PATH}")
        sys.exit(2)
    try:
        convert(CSV_PATH, XLSX_PATH)
        print(f"Saved: {XLSX_PATH}")
    except Exception as e:
        print("Error:", e)
        sys.exit(1)
