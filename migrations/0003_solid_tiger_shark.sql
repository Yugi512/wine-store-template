ALTER TABLE "reviews" DROP CONSTRAINT "reviews_wine_wines_id_fk";
--> statement-breakpoint
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_spirits_spirits_id_fk";
--> statement-breakpoint
ALTER TABLE "spirits" DROP CONSTRAINT "spirits_reviews_reviews_id_fk";
--> statement-breakpoint
ALTER TABLE "wines" DROP CONSTRAINT "wines_reviews_reviews_id_fk";
--> statement-breakpoint
ALTER TABLE "reviews" DROP COLUMN "wine";--> statement-breakpoint
ALTER TABLE "reviews" DROP COLUMN "spirits";--> statement-breakpoint
ALTER TABLE "spirits" DROP COLUMN "reviews";--> statement-breakpoint
ALTER TABLE "wines" DROP COLUMN "reviews";