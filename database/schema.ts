import { relations } from 'drizzle-orm';
import { boolean, varchar } from 'drizzle-orm/pg-core';
import { integer, pgEnum, pgTable, text, timestamp, uuid, date } from 'drizzle-orm/pg-core';

// We need to add a cart table, cart items table, orders table, order items, profile info table fpr the users with address and age and stuff, and a table to store payments using stripe but thats for later on 

export const users = pgTable('users', {
    id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
    username: varchar('username',{length: 16}).notNull().unique(),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
    role: pgEnum('role',["USER","ADMIN"])().default('USER'),
    lastActive: date('last_active').defaultNow(),
    createdAt: timestamp('created_at', {
        withTimezone: true,
    }).defaultNow(),
});

export const userRelations = relations(users,({many}) => ({
    reviews: many(reviews),
}));

export const reviews = pgTable('reviews', { 
    id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
    user: uuid('user').notNull().references(() => users.id, { onDelete: 'cascade' }),
    review: text('review').notNull(),
});

export const reviewRelations = relations(reviews, ({one}) => ({
    user: one(users,{
        fields: [reviews.user],
        references: [users.id],
    }),
}));

// need to create many to many relations later on 
export const wines = pgTable('wines', { 
    id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
    title: varchar('title').notNull(),
    ml: integer('ml').notNull(),
    price: integer('price').notNull(),
    rating: integer('rating').notNull(),
    availability: boolean('availability').notNull(),
    country: varchar('country').notNull(),
    region: varchar('region'),
    brand: varchar('brand').notNull(),
    varietal: varchar('varietal'),
    type: varchar('type'),
    abv: integer('abv').notNull(),
    description: text('description'),
    image: text('image').notNull(),
});

export const spirits = pgTable('spirits', { 
    id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
    title: varchar('title').notNull(),
    ml: integer('ml').notNull(),
    price: integer('price').notNull(),
    rating: integer('rating').notNull(),
    availability: boolean('availability').notNull(),
    country: varchar('country').notNull(),
    region: varchar('region'),
    brand: varchar('brand').notNull(),
    spirits: varchar('spirits').notNull(),
    type: varchar('type'),
    abv: integer('abv'),
    description: text('description'),
    image: text('image').notNull(),
});