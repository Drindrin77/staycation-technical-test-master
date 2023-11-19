--
-- PostgreSQL database dump
--

-- Dumped from database version 10.4 (Debian 10.4-2.pgdg90+1)
-- Dumped by pg_dump version 10.4
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;
SET default_tablespace = '';
SET default_with_oids = false;
--
-- Name: bookings; Type: TABLE; Schema: public; Owner: staycation
--

CREATE TABLE public.bookings (
    id integer NOT NULL,
    date date NOT NULL,
    user_id integer NOT NULL,
    room_id integer NOT NULL
);
ALTER TABLE public.bookings OWNER TO staycation;
--
-- Name: bookings_id_seq; Type: SEQUENCE; Schema: public; Owner: staycation
--

CREATE SEQUENCE public.bookings_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER TABLE public.bookings_id_seq OWNER TO staycation;
--
-- Name: bookings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: staycation
--

ALTER SEQUENCE public.bookings_id_seq OWNED BY public.bookings.id;
--
-- Name: hotels; Type: TABLE; Schema: public; Owner: staycation
--

CREATE TABLE public.hotels (
    id integer NOT NULL,
    name text NOT NULL,
    stars integer NOT NULL,
    preview text NOT NULL,
    picture_id text NOT NULL
);
ALTER TABLE public.hotels OWNER TO staycation;
--
-- Name: openings; Type: TABLE; Schema: public; Owner: staycation
--

CREATE TABLE public.openings (
    id integer NOT NULL,
    sale_id integer NOT NULL,
    room_id integer NOT NULL,
    date date NOT NULL,
    stock integer NOT NULL,
    price double precision NOT NULL,
    discount_price double precision NOT NULL
);
ALTER TABLE public.openings OWNER TO staycation;
--
-- Name: reviews; Type: TABLE; Schema: public; Owner: staycation
--

CREATE TABLE public.reviews (
    id integer NOT NULL,
    hotel_id integer NOT NULL,
    user_id integer NOT NULL,
    score double precision NOT NULL
);
ALTER TABLE public.reviews OWNER TO staycation;
--
-- Name: reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: staycation
--

CREATE SEQUENCE public.reviews_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER TABLE public.reviews_id_seq OWNER TO staycation;
--
-- Name: reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: staycation
--

ALTER SEQUENCE public.reviews_id_seq OWNED BY public.reviews.id;
--
-- Name: rooms; Type: TABLE; Schema: public; Owner: staycation
--

CREATE TABLE public.rooms (
    id integer NOT NULL,
    name text NOT NULL,
    hotel_id integer NOT NULL
);
ALTER TABLE public.rooms OWNER TO staycation;
--
-- Name: sale_dates; Type: TABLE; Schema: public; Owner: staycation
--

CREATE TABLE public.sale_dates (
    id integer NOT NULL,
    start_date timestamp without time zone NOT NULL,
    end_date timestamp without time zone NOT NULL,
    bookable_days date []
);
ALTER TABLE public.sale_dates OWNER TO staycation;
--
-- Name: users; Type: TABLE; Schema: public; Owner: staycation
--

CREATE TABLE public.users (
    id integer NOT NULL,
    first_name text NOT NULL
);
ALTER TABLE public.users OWNER TO staycation;
--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: staycation
--

CREATE SEQUENCE public.users_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER TABLE public.users_id_seq OWNER TO staycation;
--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: staycation
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
--
-- Name: bookings id; Type: DEFAULT; Schema: public; Owner: staycation
--

ALTER TABLE ONLY public.bookings
ALTER COLUMN id
SET DEFAULT nextval('public.bookings_id_seq'::regclass);
--
-- Name: reviews id; Type: DEFAULT; Schema: public; Owner: staycation
--

ALTER TABLE ONLY public.reviews
ALTER COLUMN id
SET DEFAULT nextval('public.reviews_id_seq'::regclass);
--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: staycation
--

ALTER TABLE ONLY public.users
ALTER COLUMN id
SET DEFAULT nextval('public.users_id_seq'::regclass);
--
-- Data for Name: bookings; Type: TABLE DATA; Schema: public; Owner: staycation
--

--
-- Name: bookings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: staycation
--

SELECT pg_catalog.setval('public.bookings_id_seq', 1222, true);
--
-- Name: reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: staycation
--

SELECT pg_catalog.setval('public.reviews_id_seq', 605, true);
--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: staycation
--

SELECT pg_catalog.setval('public.users_id_seq', 18, true);
--
-- Name: bookings bookings_pk; Type: CONSTRAINT; Schema: public; Owner: staycation
--

ALTER TABLE ONLY public.bookings
ADD CONSTRAINT bookings_pk PRIMARY KEY (id);
--
-- Name: hotels hotels_pk; Type: CONSTRAINT; Schema: public; Owner: staycation
--

ALTER TABLE ONLY public.hotels
ADD CONSTRAINT hotels_pk PRIMARY KEY (id);
--
-- Name: openings openings_pk; Type: CONSTRAINT; Schema: public; Owner: staycation
--

ALTER TABLE ONLY public.openings
ADD CONSTRAINT openings_pk PRIMARY KEY (id);
--
-- Name: reviews reviews_pk; Type: CONSTRAINT; Schema: public; Owner: staycation
--

ALTER TABLE ONLY public.reviews
ADD CONSTRAINT reviews_pk PRIMARY KEY (id);
--
-- Name: rooms rooms_pkey; Type: CONSTRAINT; Schema: public; Owner: staycation
--

ALTER TABLE ONLY public.rooms
ADD CONSTRAINT rooms_pkey PRIMARY KEY (id);
--
-- Name: sale_dates sale_dates_pk; Type: CONSTRAINT; Schema: public; Owner: staycation
--

ALTER TABLE ONLY public.sale_dates
ADD CONSTRAINT sale_dates_pk PRIMARY KEY (id);
--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: staycation
--

ALTER TABLE ONLY public.users
ADD CONSTRAINT users_pk PRIMARY KEY (id);
--
-- Name: bookings_date_index; Type: INDEX; Schema: public; Owner: staycation
--

CREATE INDEX bookings_date_index ON public.bookings USING btree (date);
--
-- Name: bookings bookings_room_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: staycation
--

ALTER TABLE ONLY public.bookings
ADD CONSTRAINT bookings_room_id_fkey FOREIGN KEY (room_id) REFERENCES public.rooms(id);
--
-- Name: bookings bookings_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: staycation
--

ALTER TABLE ONLY public.bookings
ADD CONSTRAINT bookings_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
--
-- Name: openings openings_room_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: staycation
--

ALTER TABLE ONLY public.openings
ADD CONSTRAINT openings_room_id_fkey FOREIGN KEY (room_id) REFERENCES public.rooms(id);
--
-- Name: openings openings_sale_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: staycation
--

ALTER TABLE ONLY public.openings
ADD CONSTRAINT openings_sale_id_fkey FOREIGN KEY (sale_id) REFERENCES public.sale_dates(id);
--
-- Name: reviews reviews_hotel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: staycation
--

ALTER TABLE ONLY public.reviews
ADD CONSTRAINT reviews_hotel_id_fkey FOREIGN KEY (hotel_id) REFERENCES public.hotels(id);
--
-- Name: reviews reviews_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: staycation
--

ALTER TABLE ONLY public.reviews
ADD CONSTRAINT reviews_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
--
-- Name: rooms rooms_hotel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: staycation
--

ALTER TABLE ONLY public.rooms
ADD CONSTRAINT rooms_hotel_id_fkey FOREIGN KEY (hotel_id) REFERENCES public.hotels(id);
--
-- PostgreSQL database dump complete
--