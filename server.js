/****************************************************************************
* Author: Kabir Sharan *
This file is part of the application ExpressWithNodeJs.

ExpressWithNodeJs is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

ExpressWithNodeJs is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Foobar.  If not, see <http://www.gnu.org/licenses/>.
****************************************************************************/


var http = require('http');
var express = require('express');

var startServer = function() {
    // Create the server using Express APIs.
    // No need to call http.createServer. This server instance does expose some more aggregated APIs
    var app = express();
    var host = '127.0.0.1'; // Local host.
    var port = 4444;

    app.get('/', function(req, res) {
        console.log('Request received.');
        var resContent = 'Hello Express!';

        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', resContent.length);
        res.end(resContent);
        // res.send(resContent);
    });
    app.listen(port, host);
    console.log('Server started at http://127.0.0.1:4444/');
};

startServer();

/* END */