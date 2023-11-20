FROM python:3.8

WORKDIR /api/extractDataPython
COPY requeriments.txt /api/requeriments.txt

RUN pip install --no-cache-dir --upgrade -r /api/requeriments.txt

COPY . /api/extractDataPython

EXPOSE 5000

CMD ["python", "main.py"]