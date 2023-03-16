from flask import Flask, request, jsonify
import requests

app = Flask(__name__)
@app.route('/search',methods=['GET'])


def search():
    base_url = "https://npiregistry.cms.hhs.gov/api/?version=2.1"
    last_name = request.args.get('last_name')
    first_name = request.args.get('first_name')
    city = request.args.get('city')
    state = request.args.get('state')



    url = f"{base_url}&last_name={last_name}&first_name={first_name}&city={city}&state={state}&pretty=on"
    response = requests.get(url)
    response_json = response.json()
    return jsonify(response_json)

    # results = []
    # for provider in response_json["results"]:
    #     result = {
    #         "first_name": provider["basic"]["first_name"],
    #         "last_name": provider["basic"]["last_name"],
    #         "address": provider["addresses"][0]["address_1"],
    #         "city": provider["addresses"][0]["city"],
    #         "state": provider["addresses"][0]["state"],
    #         "zip": provider["addresses"][0]["postal_code"][0:5],
    #         "npi": provider["number"]
    #     }
    #     if "telephone_number" in provider["addresses"][0]:
    #         result["phone_number"] = provider["addresses"][0]["telephone_number"]
    #     results.append(result)
    
    # return results

if __name__ == '__main__':
    app.run(debug=True,port=8500)