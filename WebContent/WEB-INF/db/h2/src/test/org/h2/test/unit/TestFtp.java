/*
 * Copyright 2004-2011 H2 Group. Multiple-Licensed under the H2 License,
 * Version 1.0, and under the Eclipse Public License, Version 1.0
 * (http://h2database.com/html/license.html).
 * Initial Developer: H2 Group
 */
package org.h2.test.unit;

import org.h2.dev.ftp.FtpClient;
import org.h2.dev.ftp.server.FtpEvent;
import org.h2.dev.ftp.server.FtpEventListener;
import org.h2.dev.ftp.server.FtpServer;
import org.h2.test.TestBase;
import org.h2.tools.Server;
import org.h2.util.IOUtils;

/**
 * Tests the FTP server tool.
 */
public class TestFtp extends TestBase implements FtpEventListener {

    private FtpEvent lastEvent;

    /**
     * Run just this test.
     *
     * @param a ignored
     */
    public static void main(String... a) throws Exception {
        TestBase.createCaller().init().test();
    }

    public void test() throws Exception {
        if (getBaseDir().indexOf(':') > 0) {
            return;
        }
        test(getBaseDir());
        IOUtils.delete(getBaseDir() + "/test");
    }

    private void test(String dir) throws Exception {
        Server server = FtpServer.createFtpServer("-ftpDir", dir, "-ftpPort", "8121").start();
        FtpServer ftp = (FtpServer) server.getService();
        ftp.setEventListener(this);
        FtpClient client = FtpClient.open("localhost:8121");
        client.login("sa", "sa");
        client.makeDirectory("test");
        client.changeWorkingDirectory("test");
        assertEquals("CWD", lastEvent.getCommand());
        client.makeDirectory("hello");
        client.changeWorkingDirectory("hello");
        client.changeDirectoryUp();
        assertEquals("CDUP", lastEvent.getCommand());
        client.nameList("hello");
        client.removeDirectory("hello");
        client.close();
        server.stop();
    }

    public void beforeCommand(FtpEvent event) {
        lastEvent = event;
    }

    public void afterCommand(FtpEvent event) {
        lastEvent = event;
    }

    public void onUnsupportedCommand(FtpEvent event) {
        lastEvent = event;
    }

}
