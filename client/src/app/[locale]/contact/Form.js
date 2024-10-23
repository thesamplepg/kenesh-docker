"use client";

import { useState } from "react";

import "./index.scss";
import { postStrapi } from "@/utils/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Notice from "@/components/UI/Notice";

function Form({ messages }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);

  const onSubmit = async (e) => {
    const data = {};
    e.preventDefault();

    const formData = new FormData(e.target);

    for (const key of formData.keys()) {
      data[key] = formData.get(key);
    }

    setLoading(true);
    const res = await postStrapi("apply", { data });
    const resdata = await res.json();

    console.log(resdata);

    if (resdata.error) setError(true);
    else {
      setMessage(true);
    }

    setLoading(false);
  };

  return (
    <form className="page-contact__form" onSubmit={onSubmit}>
      <div className="input-label">
        <label htmlFor="name">
          {messages["name"]}
          <span>*</span>
        </label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="input-label">
        <label htmlFor="surname">
          {messages["surname"]}
          <span>*</span>
        </label>
        <input type="text" id="surname" name="surname" required />
      </div>
      <div className="input-label">
        <label htmlFor="lastname">
          {messages["lastname"]}
          <span>*</span>
        </label>
        <input type="text" id="lastname" name="lastname" required />
      </div>
      <div className="input-label">
        <label htmlFor="email">
          {messages["email"]}
          <span>*</span>
        </label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="input-label">
        <label htmlFor="phone">
          {messages["phone"]}
          <span>*</span>
        </label>
        <input type="number" id="phone" name="phone" required />
      </div>
      <div className="input-label">
        <label htmlFor="address">{messages["address"]}</label>
        <input type="text" id="address" name="address" required />
      </div>
      <div className="input-label">
        <label htmlFor="social_status">
          {messages["social_status"]["label"]}
          <span>*</span>
        </label>
        <select name="social_status" id="social_status" required>
          <option value="Пенсионер">
            {messages["social_status"]["pensioner"]}
          </option>
          <option value="Пенсионер силовых структур">
            {messages["social_status"]["millitary_pensioner"]}
          </option>
          <option value="Рабочий">{messages["social_status"]["worker"]}</option>
          <option value="Беженец">{messages["social_status"]["refuge"]}</option>
          <option value="Служающий">
            {messages["social_status"]["serviceman"]}
          </option>
          <option value="Студент">
            {messages["social_status"]["student"]}
          </option>
          <option value="Военнослужащий">
            {messages["social_status"]["millitary"]}
          </option>
          <option value="Фермер">{messages["social_status"]["farmer"]}</option>
          <option value="Безработный">
            {messages["social_status"]["free-agent"]}
          </option>
          <option value="Домохозяйка">
            {messages["social_status"]["home-worker"]}
          </option>
          <option value="Госслужащий">
            {messages["social_status"]["gov-worker"]}
          </option>
          <option value="Предприниматель">
            {messages["social_status"]["businessman"]}
          </option>
          <option value="Другое">{messages["social_status"]["another"]}</option>
        </select>
      </div>
      <div className="input-label">
        <label htmlFor="apply_status">
          {messages["apply_status"]["label"]}
          <span>*</span>
        </label>
        <select name="apply_status" id="apply_status" required>
          <option value="Первичное">{messages["apply_status"]["first"]}</option>
          <option value="Вторичнео">
            {messages["apply_status"]["second"]}
          </option>
          <option value="Многократное">
            {messages["apply_status"]["many"]}
          </option>
        </select>
      </div>
      <div className="input-label">
        <label htmlFor="forwho">
          {messages["forwho"]["label"]}
          <span>*</span>
        </label>
        <select id="forwho" name="forwho" required>
          <option value="Торага">{messages["forwho"]["toraga"]}</option>
          <option value="Депутат">{messages["forwho"]["fraction"]}</option>
          <option value="Фракция">{messages["forwho"]["deputy"]}</option>
        </select>
      </div>
      <div className="input-label">
        <label htmlFor="theme">
          {messages["theme"]}
          <span>*</span>
        </label>
        <input type="text" id="theme" name="theme" required />
      </div>
      <div className="input-label">
        <label htmlFor="content">
          {messages["content"]}
          <span>*</span>
        </label>
        <textarea
          name="content"
          id="content"
          cols="320"
          rows="5"
          aria-required
        ></textarea>
      </div>
      {message ? <Notice message={messages["message"]} /> : null}
      {error ? <div className="error">{messages["error"]}</div> : null}
      <button type="submit" disabled={loading}>
        {loading ? (
          <div className="button-loader">
            <FontAwesomeIcon icon={faSpinner} />
          </div>
        ) : null}
        {messages["submit"]}
      </button>
    </form>
  );
}

export default Form;
