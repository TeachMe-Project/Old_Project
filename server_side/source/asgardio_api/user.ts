import axios, {AxiosResponse} from "axios";
import qs from "qs";
import config from "../config/config";
import {response, Response} from "express";
import logging from "../utils/logger";

let token_url = config.asgardeo.token_url;
let client_id = config.asgardeo.client_id;
let client_secret = config.asgardeo.client_secret;
let access_token;

const NAMESPACE = 'Users';

const getAccessToken = (callback: () => void) => {
    axios({
        method: 'post',
        url: `${token_url}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify({
            'grant_type': 'client_credentials',
            'client_id': `${client_id}`,
            'client_secret': `${client_secret}`,
            'scope': 'internal_user_mgt_list internal_user_mgt_create internal_user_mgt_update internal_user_mgt_delete internal_user_mgt_view'
        })
    })
        .then((response: AxiosResponse) => {
            access_token = JSON.stringify(response.data.access_token);
            access_token = access_token.replace('"', '');
            if (access_token) {
                callback();
                logging.info(NAMESPACE, 'Access Token Created: ', access_token);
                return access_token
            }
        })
        .catch((error) => {
                logging.error(NAMESPACE, error.message, error)
                return response.status(500).json({
                    message: error.message,
                    error
                });
            }
        )
}

export default {getAccessToken};