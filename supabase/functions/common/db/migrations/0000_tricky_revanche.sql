CREATE TABLE IF NOT EXISTS "results" (
	"id" uuid PRIMARY KEY NOT NULL,
	"image_url" text NOT NULL,
	"rating" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
