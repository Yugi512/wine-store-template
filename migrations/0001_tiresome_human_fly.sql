CREATE TABLE "reviews" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user" uuid NOT NULL,
	"review" text NOT NULL,
	CONSTRAINT "reviews_id_unique" UNIQUE("id")
);
--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_user_users_id_fk" FOREIGN KEY ("user") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;