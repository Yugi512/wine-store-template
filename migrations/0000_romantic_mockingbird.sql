CREATE TABLE "spirits" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar NOT NULL,
	"ml" integer NOT NULL,
	"price" integer NOT NULL,
	"rating" integer NOT NULL,
	"availability" boolean NOT NULL,
	"country" varchar NOT NULL,
	"region" varchar,
	"brand" varchar NOT NULL,
	"spirits" varchar NOT NULL,
	"type" varchar,
	"abv" integer,
	"description" text,
	"image" text NOT NULL,
	CONSTRAINT "spirits_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" varchar(16) NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"role" "role" DEFAULT 'USER',
	"last_active" date DEFAULT now(),
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "users_id_unique" UNIQUE("id"),
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "wines" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar NOT NULL,
	"ml" integer NOT NULL,
	"price" integer NOT NULL,
	"rating" integer NOT NULL,
	"availability" boolean NOT NULL,
	"country" varchar NOT NULL,
	"region" varchar,
	"brand" varchar NOT NULL,
	"varietal" varchar,
	"type" varchar,
	"abv" integer NOT NULL,
	"description" text,
	"image" text NOT NULL,
	CONSTRAINT "wines_id_unique" UNIQUE("id")
);
