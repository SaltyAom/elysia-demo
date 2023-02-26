FROM oven/bun:0.5.7

COPY . .

RUN bun install --production

EXPOSE 8080

CMD ["bun", "src/index.ts" ]
