ALTER TABLE "reviews" ADD COLUMN "wine" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "reviews" ADD COLUMN "spirits" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "spirits" ADD COLUMN "reviews" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "wines" ADD COLUMN "reviews" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_wine_wines_id_fk" FOREIGN KEY ("wine") REFERENCES "public"."wines"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_spirits_spirits_id_fk" FOREIGN KEY ("spirits") REFERENCES "public"."spirits"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spirits" ADD CONSTRAINT "spirits_reviews_reviews_id_fk" FOREIGN KEY ("reviews") REFERENCES "public"."reviews"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "wines" ADD CONSTRAINT "wines_reviews_reviews_id_fk" FOREIGN KEY ("reviews") REFERENCES "public"."reviews"("id") ON DELETE cascade ON UPDATE no action;