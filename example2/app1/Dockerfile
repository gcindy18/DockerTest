FROM python:3.6

COPY ./requirements.txt /requirements.txt

WORKDIR /

RUN pip uninstall -r requirements.txt
RUN pip install -r requirements.txt

COPY . /

ENTRYPOINT [ "python3" ]

CMD [ "app1.py" ]
