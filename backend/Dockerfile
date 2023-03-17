FROM golang:1.20.2-alpine3.17
RUN mkdir /app
ADD . /app/
WORKDIR /app
RUN go mod tidy
RUN go build -o main main.go
CMD ["/app/main"]
