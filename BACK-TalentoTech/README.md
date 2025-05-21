# FastAPI CSV GIF Application

This project is a FastAPI application that reads data from a CSV file and generates animated GIFs for each country or entity present in the CSV. It exposes two endpoints: one to return the list of available countries and another to generate and serve a GIF for a specific country.

## Project Structure

```
fastapi-csv-gif-app
├── src
│   ├── main.py                # Entry point of the FastAPI application
│   ├── utils
│   │   └── gif_generator.py    # Logic for generating GIFs from CSV data
│   ├── data
│   │   └── data.csv           # CSV data source
│   └── types
│       └── index.py           # Custom types and interfaces
├── requirements.txt           # Project dependencies
└── README.md                  # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd fastapi-csv-gif-app
   ```

2. **Create a virtual environment:**
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install the required dependencies:**
   ```
   pip install -r requirements.txt
   ```

## Usage

1. **Run the FastAPI application:**
   ```
   uvicorn src.main:app --reload
   ```

2. **Access the API:**
   - To get the list of available countries:
     ```
     GET /countries
     ```
   - To generate and retrieve a GIF for a specific country:
     ```
     GET /gif/{country_name}
     ```

## Notes

- Ensure that the CSV file (`data.csv`) is structured correctly and contains the necessary data for generating GIFs.
- The application is designed to be flexible with different CSV column names, allowing for easy adaptation to various datasets.

## License

This project is licensed under the MIT License.