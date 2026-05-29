FROM golang:1.26-alpine

WORKDIR /app/backend

# Install air for live-reload (dev mode)
RUN go install github.com/air-verse/air@latest

COPY go.mod go.sum ./
RUN go mod download

COPY . .

CMD ["air", "-c", ".air.toml"]